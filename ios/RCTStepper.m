#import "RCTStepper.h"

@implementation RCTStepper

- (void)setValue:(double)value
{
  _prevValue = value;
  [super setValue:value];
}

@end
