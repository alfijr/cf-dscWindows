// "vpcPeering": {
        //     "Type" : "AWS::EC2::VPCPeeringConnection",
        //     "Properties" : {
        //         "PeerVpcId" : {"Ref" : "basevpc"},
        //         "Tags" : [{"Key" : "Description", "Value": "VPC_PEER with Snowflake_VPC"}],
        //         "VpcId" : "PLACE SNOWFLAKE VPC HERE>>>>>>"
        //     }
        // }  




        // "DSCBucketPolicy": {
        //     "Type": "AWS::S3::BucketPolicy",
        //     "Properties": {
        //         "Bucket" : { 
        //             "Ref" : "DeploymentS3BucketName" 
        //         }, 
        //         "PolicyDocument" : {
        //             "Version": "2012-10-17",
        //             "Statement": [
        //                 {
        //                     "Sid": "AddPerm",
        //                     "Effect": "Allow",
        //                     "Principal": "*",
        //                     "Action": "s3:GetObject",
        //                     "Resource": { "Fn::Join" : [
        //                         "", [
        //                             "arn:aws:s3:::",
        //                             { 
        //                                 "Ref" : "DeploymentS3BucketName" 
        //                             }, 
        //                             "/*"
        //                         ]
        //                     ] }    
        //                 }
        //             ]
        //         }
        //     }
        // },    