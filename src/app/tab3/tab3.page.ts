import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  email: string = '';
  nombre: string = '';
  telefono: string = '';
  opcion1: boolean = false;
  opcion2: boolean = false;
  opcion3: boolean = false; // Nueva opción
  opcion4: boolean = false; // Nueva opción
  mensaje: string = '';

  constructor(private toastController: ToastController) {}

  enviarFormulario() {
    // Aquí puedes procesar los datos del formulario como desees

    // Mostrar un mensaje de solicitud aceptada
    this.mensaje = 'Solicitud aceptada. Gracias por contactarnos.';
    this.presentToast();
    
    // Borra los valores del formulario incluyendo las nuevas opciones
    this.email = '';
    this.nombre = '';
    this.telefono = '';
    this.opcion1 = false;
    this.opcion2 = false;
    this.opcion3 = false;
    this.opcion4 = false;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.mensaje,
      duration: 3000, // Duración del mensaje (3 segundos)
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel', // Este botón cierra el Toast
          handler: () => {
            this.limpiarMensaje();
          },
        },
      ],
    });
    toast.present();
  }

  limpiarMensaje() {
    this.mensaje = '';
  }
}
