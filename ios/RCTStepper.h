#import <UIKit/UIKit.h>

#import <React/RCTComponent.h>

@interface RCTStepper : UIStepper

@property (nonatomic, assign) double prevValue;
@property (nonatomic, copy) RCTBubblingEventBlock onChange;

@end
