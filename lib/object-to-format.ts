import { ObjectToFormat, ObjectToFormatOptions } from '../index';
/**
 * @param obj unit, size, format
 * @param options separator
 * @Return string
 */
export const objectToFormat = (obj: ObjectToFormat, { separator }: ObjectToFormatOptions = { separator: '' }) => {
    return obj.format && obj.size + separator + obj.unit;
};
