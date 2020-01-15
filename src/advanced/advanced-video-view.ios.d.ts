import '../async-await';
import { AdvancedVideoViewBase } from './advanced-video-view.common';
export * from './advanced-video-view.common';
export declare enum NativeOrientation {
    Unknown = 0,
    Portrait = 1,
    PortraitUpsideDown = 2,
    LandscapeLeft = 3,
    LandscapeRight = 4
}
export declare class AdvancedVideoView extends AdvancedVideoViewBase {
    nativeView: UIView;
    _output: AVCaptureMovieFileOutput;
    _file: NSURL;
    _connection: AVCaptureConnection;
    _device: AVCaptureDevice;
    private session;
    thumbnails: string[];
    _fileName: string;
    folder: any;
    private requestStoragePermission;
    static isAvailable(): boolean;
    createNativeView(): UIView;
    initNativeView(): void;
    onLoaded(): void;
    onUnloaded(): void;
    readonly duration: number;
    readonly isTorchAvailable: boolean;
    toggleTorch(): void;
    private _setOutputOrientation;
    private openCamera;
    startRecording(): void;
    stopRecording(): void;
    stopPreview(): void;
    toggleCamera(): void;
    startPreview(): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    private extractThumbnails;
}
