import * as z from 'zod';

import { useIntl } from 'react-intl';

export const useFormSchema = () => {
    const { formatMessage } = useIntl();

    const findDroneSchemaForm = z.object({
        location: z.string(),
        date: z.string(),
        startTime: z.string(),
        endTime: z.string(),
        specialty: z.string(),
    });

    return { findDroneSchemaForm };
};
