import QRCode from 'qrcode';
import toSJIS from 'qrcode/helper/to-sjis';

// type TypeOptionsImage = {
//     errorCorrectionLevel: string,
//     type: string,
//     quality: number,
//     margin: number,
//     color: {
//       dark: string,
//       light: string
//     }
// }

// const optsExample: TypeOptionsImage = {
//     errorCorrectionLevel: 'H',
//     type: 'image/jpeg',
//     quality: 0.3,
//     margin: 1,
//     color: {
//       dark:"#010599FF",
//       light:"#FFBF60FF"
//     }
//   }

interface ConstructorTranformQrCode {
    trarnformDataUrl (): Promise<string> 
    trarnformToCanvas (): Promise<HTMLCanvasElement> 
    trarnformFile (nameFile: string): Promise<void> 
}

class QrCodeTranformImage implements ConstructorTranformQrCode {
    private qrCode: typeof QRCode = QRCode;
    private toSJIS: typeof toSJIS = toSJIS;
    public text: string;

    constructor(text: string) {
        this.text = text;
    }

    async trarnformDataUrl (): Promise<string> {    
        const dataUrlImage: Promise<string> = this.qrCode.toDataURL(this.text, { toSJISFunc: this.toSJIS })
        return dataUrlImage
    }

    async trarnformToCanvas (): Promise<HTMLCanvasElement> {    
        const dataUrlImage: Promise<HTMLCanvasElement> = this.qrCode.toCanvas(this.text, { toSJISFunc: this.toSJIS })
        return dataUrlImage
    }    

    async trarnformFile (nameFile: string): Promise<void> {        
        const resultFile = this.qrCode.toFile(
            nameFile,
            [{ data: new Uint8ClampedArray([253,254,255]), mode: 'byte' }]
        )
        return resultFile;
    }
}

export {
    QrCodeTranformImage
}