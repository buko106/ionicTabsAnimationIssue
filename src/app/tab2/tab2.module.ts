import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Tab2SubPage } from './tab2-sub.page';
import { RouterOutletWrapperComponent } from './router-outlet-wrapper.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RouterOutletWrapperComponent,
        children: [{ path: '', component: Tab2Page }, { path: 'sub-page', component: Tab2SubPage }],
      },
    ]),
  ],
  declarations: [Tab2Page, Tab2SubPage, RouterOutletWrapperComponent],
})
export class Tab2PageModule {}
