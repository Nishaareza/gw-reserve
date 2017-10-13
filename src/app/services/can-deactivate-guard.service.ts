import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface ICanDeactivate {
  canDeactivate: () => boolean;
}

@Injectable( )
  export class CanDeactivateService implements CanDeactivate<ICanDeactivate> {
    canDeactivate(component: ICanDeactivate) {
      if (component.canDeactivate) {
       const whatDoesTheComponentSay = component.canDeactivate();
       return whatDoesTheComponentSay;
      }
      return true;
    }
}

