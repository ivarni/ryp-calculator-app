export const FIELD_CHANGE = 'FIELD_CHANGE';
export const fieldChange = (field, value) => (
    {
        type: FIELD_CHANGE,
        field,
        value,
    }
);

export const LABEL_CHANGE = 'LABEL_CHANGE';
export const labelChange = (field, value, notes) => (
    {
        type: LABEL_CHANGE,
        field,
        value,
        notes,
    }
);
