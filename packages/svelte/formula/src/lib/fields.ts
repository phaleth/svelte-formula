import { FormEl } from '../types/forms';

/**
 * Extract all fields with a `name` attribute, then only return the ones that have `checkValidity` as we use these
 * for our validity state
 *
 * @private
 * @internal
 * @param rootEl
 */
export function getAllFieldsWithValidity(rootEl: HTMLElement) {
  const nodeList = rootEl.querySelectorAll('*[name]') as NodeListOf<HTMLElement>;
  return Array.from(nodeList).filter((el) => (el as any).checkValidity) as FormEl[];
}
