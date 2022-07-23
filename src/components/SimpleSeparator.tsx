export interface SeparatorProps {
  dimension?: {
    height: string;
    width: string;
  };
  pulse?: boolean;
  color?: string;
  position?: 'start' | 'center' | 'end';
}

/**
 * Simple horizontal separator that takes four optional arguments
 * defaults to:
 ** 50% width & 2px height
 ** No 'Pulse' Animation
 ** Orange Color
 ** Center Position
 */

const SimpleSeparator = ({
  dimension,
  pulse = false,
  color,
  position,
}: SeparatorProps) => {
  const separatorStyle = dimension
    ? { width: `${dimension.width}`, height: `${dimension.height}` }
    : { width: '50%', heigth: '2px' };
  let separatorPosition;
  switch (position) {
    case 'start':
      separatorPosition = 'justify-start';
      break;
    case 'end':
      separatorPosition = 'justify-end';
      break;
    default:
      separatorPosition = 'justify-center';
  }

  return (
    <div className={`flex w-full flex-row ${separatorPosition}`}>
      <div
        style={separatorStyle}
        className={`mt-1 mb-1 h-1 
        ${pulse ? 'animate-pulse' : ' '} 
        ${color || 'dark:bg-orange-300 bg-slate-900'}
        `}
      ></div>
    </div>
  );
};

export { SimpleSeparator };
