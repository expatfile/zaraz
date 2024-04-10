import { get } from './get';
import { getAll } from './get-all';
import { getAllCheckboxes } from './get-all-checkboxes';
import { sendQueuedEvents } from './send-queued-events';
import { set } from './set';
import { setAll } from './set-all';
import { setAllCheckboxes } from './set-all-checkboxes';
import { setCheckboxes } from './set-checkboxes';

export const consent = {
  get,
  set,
  getAll,
  setAll,
  getAllCheckboxes,
  setCheckboxes,
  setAllCheckboxes,
  sendQueuedEvents,
};
