export interface ResultatUploadCloudinary {
    url: string;
    cloudinaryId: string;
}
export declare class CloudinaryService {
    constructor();
    uploadBuffer(buffer: Buffer, mimeType: string, nomFichier: string): Promise<ResultatUploadCloudinary>;
    supprimer(cloudinaryId: string): Promise<void>;
}
