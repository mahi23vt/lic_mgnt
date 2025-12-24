import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface LoginRequest { username: string; password: string; remember?: boolean }
export interface LoginResponse { token: string; expiresIn?: number; user?: any }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiBase = '/api/auth'; // change as needed (use environment)
  private _currentUser$ = new BehaviorSubject<any | null>(this.loadUserFromStorage());
  currentUser$ = this._currentUser$.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiBase}/login`, payload).pipe(
      tap(res => {
        if (res && res.token) {
          this.saveToken(res.token, payload.remember);
          this._currentUser$.next(res.user ?? { username: payload.username });
        }
      })
    );
  }

  logout(redirectTo = '/login') {
    this.clearToken();
    this._currentUser$.next(null);
    this.router.navigateByUrl(redirectTo);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // token storage: prefer HttpOnly cookie set by backend.
  // If using localStorage fallback:
  private saveToken(token: string, remember?: boolean) {
    if (remember) {
      localStorage.setItem('auth_token', token);
    } else {
      sessionStorage.setItem('auth_token', token);
    }
  }
  getToken(): string | null {
    return sessionStorage.getItem('auth_token') ?? localStorage.getItem('auth_token');
  }
  private clearToken() {
    sessionStorage.removeItem('auth_token');
    localStorage.removeItem('auth_token');
  }

  private loadUserFromStorage() {
    const token = this.getToken();
    if (!token) return null;
    // optionally decode token for user info -> but prefer backend /user endpoint for authoritative data
    return { token };
  }
}
