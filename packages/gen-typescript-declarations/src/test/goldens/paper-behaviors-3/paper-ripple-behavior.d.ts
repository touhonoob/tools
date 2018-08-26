/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-ripple-behavior.js
 */


// tslint:disable:variable-name API description
// tslint:disable:no-any describes the API as best we are able today

import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';

export {PaperRippleBehavior};

/**
 * `PaperRippleBehavior` dynamically implements a ripple when the element has
 * focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `IronButtonState` and `IronControlState`.
 */
interface PaperRippleBehavior {

  /**
   * If true, the element will not produce a ripple effect when interacted
   * with via the pointer.
   */
  noink: boolean|null|undefined;
  _rippleContainer: Element|null|undefined;

  /**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */
  _buttonStateChanged(): void;

  /**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */
  _downHandler(event: any): void;

  /**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   *
   * @param optTriggeringEvent (optional) event that triggered the
   * ripple.
   */
  ensureRipple(optTriggeringEvent?: Event): void;

  /**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */
  getRipple(): any;

  /**
   * Returns true if this element currently contains a ripple effect.
   */
  hasRipple(): boolean;

  /**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   *
   * @returns Returns a `<paper-ripple>` element.
   */
  _createRipple(): PaperRippleElement;
  _noinkChanged(noink: any): void;
}

declare const PaperRippleBehavior: object;
