import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Paciente } from "./paciente.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  readonly apiURL: string;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
    this.apiURL = 'http://localhost:8080/patient';
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }



  create(paciente: Paciente): Observable<Paciente[]> {
    return this.http.post<Paciente>(this.apiURL, paciente).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiURL}`);
  }

  readById(id: number): Observable<Paciente> {
    const url = `${this.apiURL}/${id}`
    return this.http.get<Paciente>(url);
  }

  update(paciente: Paciente): Observable<Paciente> {
    const url = `${this.apiURL}/update`
    return this.http.put<Paciente>(url, paciente);
  }

  delete(id: number): Observable<Paciente>{
    const url = `${this.apiURL}/delete/${id}`
    return this.http.post<Paciente>(url, id)
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!");
    return EMPTY;
  }

}
