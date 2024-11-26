import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: 'Residence A', address: '123 Main St', image: 'assets/sponge.png', status: 'Disponible' },
    { id: 2, name: 'Residence B', address: 'Unknown', image: 'assets/sponge2.jpeg', status: 'En Construction' },
    { id: 3, name: 'Residence C', address: '456 Park Ave', image: 'assets/sponge3.jpeg', status: 'Vendu' },
  ];
  
  searchAddress: string = '';
  favorites: Residence[] = [];

  alertMessage: string | null = null;
  alertType: string = 'success';

  filteredResidences() {
    return this.listResidences.filter((residence) =>
      residence.address.toLowerCase().includes(this.searchAddress.toLowerCase())
    );
  }

  showLocation(residence: Residence) {
    if (residence.address === 'Unknown') {
      this.displayAlert('The address of this residence is unknown.', 'danger');
    } else {
      this.displayAlert(`Address: ${residence.address}`, 'info');
    }
  }

  likeResidence(residence: Residence) {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
      this.displayAlert(`${residence.name} has been added to your favorites.`, 'success');

    }
  }

  displayAlert(message: string, type: string) {
    this.alertMessage = message;
    this.alertType = type;

    setTimeout(() => {
      this.closeAlert();
    }, 3000);
  }

  closeAlert() {
    this.alertMessage = null;
  }

  onImageError(event: any) {
    event.target.src = 'assets/default.png';
  }

}

