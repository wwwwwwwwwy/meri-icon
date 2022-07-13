<template>
<div>
    <div class="code">
        <div>
            <h3>安装</h3>
            <pre>
<div>
  npm install meri-icon --save
  pnpm install meri-icon --save
</div></pre>
        </div>
        <div>
            <h3>使用</h3>
            <pre>
            <div>
import { IconName } from 'meri-icon'
import "meri-icon/lib/style.css"
&lt;IconName :size="36" color="'red'" hoverColor="'red'" &gt;
&lt;IconMeriActionAdd size={38} color={'red'} hoverColor={'blue'}/&gt;
            </div>
        </pre>
        </div>
        <div>
            <h3>动态组件</h3>
            <pre>
<div>
 &lt;template&gt;
   &lt;div&gt;
     &lt;component :is="'IconMeriActionAdd'"&gt;&lt;/component&gt;
     &lt;component :is="'IconMeriActionMinus'"&gt;&lt;/component&gt;
     &lt;component :is="'IconMeriActionDone'"&gt;&lt;/component&gt;
     &lt;component :is="'IconMeriActionClose'"&gt;&lt;/component&gt;
   &lt;/div&gt;
 &lt;/template&gt;
 &lt;script lang="ts"&gt;
 import { defineComponent } from "vue";
 import * as meriIcon from "meri-icon";
 
 export default defineComponent({
   components: {
     ...meriIcon,
   },
   setup() {},
 });
 &lt;/script&gt;
</div>
        </pre>
        </div>
        <div>
            <h3>JSX动态组件</h3>
            <pre>
<div>
    import { defineComponent, h } from "vue"
    import * as components from "meri-icon";
    import "meri-icon/lib/style.css"
    
    export default defineComponent({
        setup() {
            return () =&gt; {
    
                const type = "IconMeriActionAdd";
                const CurrenIcon = components[type];
    
                return &lt;h2&gt;
                    &lt;CurrenIcon size={16}&gt;&lt;/CurrenIcon&gt;
                    &lt;CurrenIcon size={24}&gt;&lt;/CurrenIcon&gt;
                    &lt;CurrenIcon size={38} color={'red'}&gt;&lt;/CurrenIcon&gt;
                    &lt;CurrenIcon size={38} hoverColor={'red'}&gt;&lt;/CurrenIcon&gt;
                    &lt;CurrenIcon
                        size={38}
                        color={'red'}
                        hoverColor={'blue'}
                    &gt;&lt;/CurrenIcon&gt;
                &lt;/h2&gt;
            }
        }
    })
</div>
        </pre>
        </div>
    </div>


</div>
</template>

<style lang="css">
.banner {
  padding-top: 30px;
  text-align: center;
}
.code {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column nowrap;
  margin: 0 auto;
  /* max-width: 720px; */
}
.code div {
  width: 48%;
}
pre {
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  color: #476391;
  background-color: #e7ecf3;
  overflow: auto;
}

pre div{
  text-align: left;
}
h3 {
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 10px 0;
}
</style>
