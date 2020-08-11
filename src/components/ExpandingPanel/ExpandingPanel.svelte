<script>
    export let title="";
    let expanded=true;

    function onExpanded() {
        expanded= !expanded;
    }

</script>
<style>
    @import "ExpandingPanel.css";
</style>

<div class="panel">
    <div class="panel-header" on:click="{onExpanded}">
            <span class="panel-title">{title}</span>
            {#if (expanded)}
                <div class="collapser" >-</div>
            {:else}
                <div class="expander">+</div>
            {/if}
    </div>
    {#if (expanded)}
    <div class="panel-content">
        <slot>

        </slot>
    </div>
    {/if}
</div>