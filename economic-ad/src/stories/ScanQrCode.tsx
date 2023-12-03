import { useState, useEffect } from 'react';
import Image from 'next/image';
import { QrCodeTranformImage } from './helpers/images';

interface ScanQrCodeProps {
    text: string;
    onClick?: () => void;
}

const ScanQrCode = ({text, ...props}: ScanQrCodeProps) => {
    const [dataUrl, setDataUrl] = useState<string>('');

    useEffect((() => {
        const asyncData = async() => {
            const qrCodeTranformImage: QrCodeTranformImage = new QrCodeTranformImage(text)
            const resultDataUrl: string = await qrCodeTranformImage.trarnformDataUrl();
            setDataUrl(resultDataUrl);
        }
        asyncData();
    }), [])


  return (
    <div>
        <Image
            alt=""
            loading="lazy"
            width={48}
            height={48}
            decoding="async"
            data-nimg={1}
            className="h-12 w-12 object-cover"
            style={{ color: "transparent" }}
            src={dataUrl}
        />
    </div>
  )
}

export type {
    ScanQrCodeProps
}

export {
    ScanQrCode
}