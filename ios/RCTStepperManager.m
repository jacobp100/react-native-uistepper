#import "RCTStepperManager.h"
#import "RCTStepper.h"

@implementation RCTStepperManager

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (UIView *)view
{
  RCTStepper *stepper = [RCTStepper new];
  [stepper addTarget:self
              action:@selector(onChange:)
    forControlEvents:UIControlEventValueChanged];
  return stepper;
}

- (NSDictionary *)constantsToExport
{
  RCTStepper *stepper = [RCTStepper new];
  [stepper layoutIfNeeded];

  return @{
    @"width": @(CGRectGetWidth(stepper.frame)),
    @"height": @(CGRectGetHeight(stepper.frame)),
  };
}

- (void)onChange:(RCTStepper *)sender
{
  if (sender.prevValue != sender.value) {
    if (sender.onChange) {
      sender.onChange(@{ @"value": @(sender.value) });
    }
    sender.prevValue = sender.value;
  }
}

RCT_EXPORT_VIEW_PROPERTY(value, double);
RCT_EXPORT_VIEW_PROPERTY(isContinuous, BOOL)
RCT_EXPORT_VIEW_PROPERTY(autorepeat, BOOL)
RCT_EXPORT_VIEW_PROPERTY(wraps, BOOL)
RCT_EXPORT_VIEW_PROPERTY(minimumValue, double)
RCT_EXPORT_VIEW_PROPERTY(maximumValue, double)
RCT_EXPORT_VIEW_PROPERTY(stepValue, double)
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock);
RCT_CUSTOM_VIEW_PROPERTY(disabled, BOOL, RCTStepper)
{
  if (json) {
    view.enabled = !([RCTConvert BOOL:json]);
  } else {
    view.enabled = defaultView.enabled;
  }
}

@end
