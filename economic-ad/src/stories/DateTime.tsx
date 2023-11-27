import React from 'react';
import { format } from 'date-fns';
import { DateFormatter, DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  mode?: "single" | "multiple" | "range" | "default";
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const seasonEmoji: Record<string, string> = {
    winter: '⛄️',
    spring: '🌸',
    summer: '🌻',
    autumn: '🍂'
};

const getSeason = (month: Date): string => {
    const monthNumber = month.getMonth();
    if (monthNumber >= 0 && monthNumber < 3) return 'winter';
    if (monthNumber >= 3 && monthNumber < 6) return 'spring';
    if (monthNumber >= 6 && monthNumber < 9) return 'summer';
    else return 'autumn';
};


const formatCaption: DateFormatter = (month, options) => {
    const season = getSeason(month);
    return (
        <>
        <span role="img" aria-label={season}>
            {seasonEmoji[season]}
        </span>{' '}
        {format(month, 'LLLL', { locale: options?.locale })}
        </>
    );
};

export const DateTime = ({
  primary = false,
  size = 'medium',
  mode = 'single',
  label,
  ...props
}: ButtonProps) => {
    const [selected, setSelected] = React.useState<Date>();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <DayPicker
        mode="single"
        formatters={{ formatCaption }}
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        />
    );
};
