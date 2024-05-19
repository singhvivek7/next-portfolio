import { ImageResponse } from 'next/og';
import { appConfig } from '@/config/app.config';

export const alt = 'Vivek - Portfolio';
export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

const Image = async () => {
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: 'inherit',
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '10%',
          background:
            'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
        }}
      >
        <p
          style={{
            fontSize: '120px',
            fontWeight: '900',
            lineHeight: '1',
            color: '#ffffff'
          }}
        >
          Vivek Kumar
        </p>
        <p
          style={{
            fontSize: '50px',
            lineHeight: '1',
            color: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          Home - Personal Portfolio Website
        </p>
        <p
          style={{
            position: 'absolute',
            bottom: '5px',
            right: '10%',
            fontSize: '2rem',
            textDecoration: 'underline',
            color: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          {appConfig.baseUrl}
        </p>
      </div>
    ),

    {
      ...size
    }
  );
};

export default Image;
