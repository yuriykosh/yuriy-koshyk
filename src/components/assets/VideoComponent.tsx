import { ForwardedRef, forwardRef } from "react";

interface VideoComponentProps {
  src: string;
  videoRef: ForwardedRef<HTMLVideoElement>;
}

const VideoComponent = forwardRef<HTMLVideoElement, VideoComponentProps>(
  ({ src }, ref) => {
    return (
      <video
        ref={ref}
        muted
        playsInline
        className="w-full h-full object-cover object-center"
      >
        <source src={`${src}-hd`} type="video/mp4" media="(max-width:639px)" />
        <source src={`${src}-hd`} type="video/webm" media="(max-width:639px)" />
        <source src={`${src}-x1`} type="video/mp4" media="(max-width:1279px)" />
        <source
          src={`${src}-x1`}
          type="video/webm"
          media="(max-width:1279px)"
        />
        <source src={`${src}-x2`} type="video/mp4" media="(max-width:1919px)" />
        <source
          src={`${src}-x2`}
          type="video/webm"
          media="(max-width:1919px)"
        />
        <source src="big.mp4" type="video/mp4" />
        <source src={`${src}-x4`} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    );
  }
);

VideoComponent.displayName = "VideoComponent";

export default VideoComponent;
