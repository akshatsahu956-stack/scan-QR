import { Component } from '@angular/core';

@Component({
  selector: 'app-box-packing',
  templateUrl: './box-packing.component.html',
  styleUrls: ['./box-packing.component.scss']
})
export class BoxPackingComponent {
    products = [
    {
      name: 'Bottle',
      components: [
        { name: 'Bottle Cap', barcode: 'CAP-111', scanned: false },
        { name: 'Bottle Body', barcode: 'BODY-222', scanned: false },
        { name: 'Bottle Sticker', barcode: 'ST-333', scanned: false }
      ]
    },
    {
      name: 'Mobile',
      components: [
        { name: 'Battery', barcode: 'BAT-555', scanned: false },
        { name: 'Screen', barcode: 'SCR-666', scanned: false },
        { name: 'Back Cover', barcode: 'BC-777', scanned: false }
      ]
    }
  ];

  selectedProduct: string = '';
  components: any[] = [];
  scanInput = '';

  loadComponents() {
    const prod = this.products.find(p => p.name === this.selectedProduct);
    this.components = prod ? JSON.parse(JSON.stringify(prod.components)) : [];
  }

  verifyScan() {
    const barcode = this.scanInput.trim();

    const component = this.components.find(c => c.barcode === barcode);

    if (component) {
      component.scanned = true;
    } else {
      alert('Invalid Component Scan!');
    }

    this.scanInput = '';
  }

}
