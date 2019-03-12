# Patch: Allow overriding the close to right function on tabs
#
# Function required: closeToRightOnTabComponent({supr,comp})
#
# Find match: this.closeToRight=((e,t)=>{const a=!t;m.a.closeToRight(e,a)}
# Replace to: this.closeToRight=((e,t)=>{const a=!t;const supr=()=>m.a.closeToRight(e,a);const comp=this;closeToRightOnTabComponent({supr,comp})}

sed 's/this.closeToRight=((e,t)=>{const a=!t;m.a.closeToRight(e,a)}/this.closeToRight=((e,t)=>{const a=!t;const supr=()=>m.a.closeToRight(e,a);const comp=this;closeToRightOnTabComponent({supr,comp})}/' | \
sed 's/id:`tab-${e.key}`,/id:`tab-${e.key}`,e:e,/'
