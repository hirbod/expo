import { ViewProps } from 'react-native';

import type { VideoPlayer } from './VideoPlayer.types';

/**
 * Describes how a video should be scaled to fit in a container.
 * - `contain`: The video maintains its aspect ratio and fits inside the container, with possible letterboxing/pillarboxing.
 * - `cover`: The video maintains its aspect ratio and covers the entire container, potentially cropping some portions.
 * - `fill`: The video stretches/squeezes to completely fill the container, potentially causing distortion.
 */
export type VideoContentFit = 'contain' | 'cover' | 'fill';

export interface VideoViewProps extends ViewProps {
  /**
   * A player instance – use `useVideoPlayer()` to create one.
   */
  player: VideoPlayer;

  /**
   * Determines whether native controls should be displayed or not.
   * @default true
   */
  nativeControls?: boolean;

  /**
   * Determines whether the video is to be played "inline", that is, within the element's playback area. Note that the absence of this attribute does not imply that the video will always be played in fullscreen.
   * This property is relevant only on mobile web browsers.
   * @default true
   * @platform web
   */
  playsInline?: boolean;

  /**
   * Describes how the video should be scaled to fit in the container.
   * Options are 'contain', 'cover', and 'fill'.
   * @default 'contain'
   */
  contentFit?: VideoContentFit;

  /**
   * Determines whether fullscreen mode is allowed or not.
   * @default true
   */
  allowsFullscreen?: boolean;

  /**
   * Determines whether the timecodes should be displayed or not.
   * @default true
   * @platform ios
   */
  showsTimecodes?: boolean;

  /**
   * Determines whether the player allows the user to skip media content.
   * @default false
   * @platform android
   * @platform ios
   */
  requiresLinearPlayback?: boolean;

  /**
   * Determines the position offset of the video inside the container.
   * @default { dx: 0, dy: 0 }
   * @platform ios
   */
  contentPosition?: { dx?: number; dy?: number };

  /**
   * A callback to call after the video player enters Picture in Picture (PiP) mode.
   * @platform android
   * @platform ios
   */
  onPictureInPictureStart?: () => void;

  /**
   * A callback to call after the video player exits Picture in Picture (PiP) mode.
   * @platform android
   * @platform ios
   */
  onPictureInPictureStop?: () => void;

  /**
   * Determines whether the player allows Picture in Picture (PiP) mode.
   * > **Note:** The `supportsPictureInPicture` property of the [config plugin](#configuration-in-appjsonappconfigjs)
   * > has to be configured for the PiP to work.
   *
   * @default false
   * @platform ios
   */
  allowsPictureInPicture?: boolean;

  /**
   * Determines whether the player should start Picture in Picture (PiP) automatically when the app is in the background.
   * > **Note:** Only one player can be in Picture in Picture (PiP) mode at a time.
   *
   * > **Note:** The `supportsPictureInPicture` property of the [config plugin](#configuration-in-appjsonappconfigjs)
   * > has to be configured for the PiP to work.
   *
   * @default false
   * @platform android 12+
   * @platform ios
   */
  startsPictureInPictureAutomatically?: boolean;

  /**
   * Specifies whether to perform video frame analysis (Live Text in videos). Check official [Apple documentation](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/allowsvideoframeanalysis) for more details.
   * @default true
   * @platform ios 16.0+
   */
  allowsVideoFrameAnalysis?: boolean;
}
