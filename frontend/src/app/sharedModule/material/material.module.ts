import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const MaterialConstants=[
  MatCardModule ,MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule
];

@NgModule({
  imports: [MaterialConstants],
  exports:[MaterialConstants]
})
export class MaterialModule { }
