import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'SUBMIT_FORM',
]);

export default actionTypes;

export function submitForm(params) {
  return {
    type: actionTypes.SUBMIT_FORM,
    payload: {params}
  };
}
