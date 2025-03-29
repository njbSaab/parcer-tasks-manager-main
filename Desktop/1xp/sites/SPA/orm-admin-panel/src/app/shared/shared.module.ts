import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiActionModule, } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [SidebarComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    TuiActionModule
  ],
  exports: [SidebarComponent,LoaderComponent],
})
export class SharedModule {}