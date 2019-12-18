import {NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {MatButtonModule , MatCheckboxModule , MatToolbarModule, MatDividerModule, MatPaginatorModule, MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
    imports: [MatProgressSpinnerModule, MatPaginatorModule,   MatDividerModule,MatButtonModule ,MatCheckboxModule , MatSnackBarModule,MatCheckboxModule , MatToolbarModule , MatIconModule,MatInputModule,MatCardModule ],
    exports: [ MatProgressSpinnerModule,MatPaginatorModule,   MatDividerModule,MatButtonModule, MatCheckboxModule,MatSnackBarModule, MatCheckboxModule , MatToolbarModule , MatIconModule,MatInputModule,MatCardModule],
})

export class MaterialModule {}