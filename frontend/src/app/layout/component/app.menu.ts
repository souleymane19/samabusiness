import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
               { 
                items: [
                    {
                        label: 'Tableau de bord',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/dashboard']
                    },
                    {
                        label: 'Facturation',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/invoice']
                    },
                    {
                        label: 'Dépenses',
                        icon: 'pi pi-fw pi-wallet',
                        routerLink: ['/expenses']
                    },
                    {
                        label: 'Clients et Fournisseurs',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/clients-suppliers']
                    },
                    {
                        label: 'Articles',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/products']
                    },
                    {
                        label: 'Catégorisation et Comptabilité',
                        icon: 'pi pi-fw pi-tags',
                        routerLink: ['/categorization']
                    },
                    {
                        label: 'Paramètres',
                        icon: 'pi pi-fw pi-cog',
                        routerLink: ['/settings']
                    }
                    
                ] },
            ]}
}
