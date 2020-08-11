<script>
    import ExpandingPanel from '../ExpandingPanel'
</script>
<style>
    @import "About.css";
</style>

<ExpandingPanel title="About _ComponentTemplate">

<div>
    <p>
        <span class="monospaced">_ComponentTemplate</span> is a template directory and set of files for
        creating new components.
        It will not show up on a page if you include it directly.
        It's intended to copied and renamed in order to create a new component.
    </p>
    <p>
        After copying and renaming, remove the style <span class="monospaced">component-template</span>
        from the containing <span class="monospaced">div</span> tag to see this content appear for your
        component. Alternately you may just replace this and the component's style sheet with your
        own content.
    </p>
    <p>
        As well, please consider renaming the files from "Component.*" to the directory name.
        This is to ensure you know which component you're working on at all times.
        If all of the <span class="monospaced">*.css</span> and <span>*.svelte</span> files are named
        <span class="monospaced">Component.*</span> you'll risk getting confused and placing the wrong
        code in the wrong file.
        Once you've done that also ensure that <span class="monospaced">index.js</span> has been pointed at the
        renamed <span class="monospaced">*.svelte</span> file.
    </p>
</div>
</ExpandingPanel>