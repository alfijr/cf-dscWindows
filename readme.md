# Cloudformation VPC script
Cloudformation stack for ElevenWireless.


## DSC Windows instances
- Sets up a VPC, an IGW, NatGateway, ALB, private and public subnets
- Windows instances are created and configured using DSC to check state and setup IIS on the instance. 
- Instances are in a private subnet and communicate through the Nat and are visible through the ALB.

### TO Run 
- Unpack into an s3 bucket.
- Call create in cloudformation UI or CLI and point to the baselayer.yaml.
- Make sure to pass correct s3 url that points to the rest of the stack
