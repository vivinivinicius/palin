import { Component, input } from '@angular/core';

@Component({
  selector: 'app-palin',
  templateUrl: './palin.component.html',
  styleUrl: './palin.component.css'
})
export class PalinComponent {

  inputText: string = '';
  umPalindromo: boolean | null = null;

  verificadorPalindromo(): void {
    const inputLimpo = this.inputText.toLowerCase().replace(/[^a-z0-9]/g, '');
    const inputReverso = inputLimpo.split('').reverse().join('');
    this.umPalindromo = inputLimpo === inputReverso;
  }

}
