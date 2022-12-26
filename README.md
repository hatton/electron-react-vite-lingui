This is where I'm trying sort out all the hurdles to moving lameta to vite. It has

- electron
- vite
- vitest
- typescript
- emotion
- storybook
- material ui (version 4)
- lingui (partially, see below)

To run:
`yarn && yarn lingui-extract && yarn lingui-compile && yarn dev`

## Limitation: no lingui macros

This current branch has a working lingui setup, but you can't use lingui macros like `` t`hello world`` `. There are various plugins and hacks out there... I didn't try that hard to get any to work, but all rely on running Babel anyhow, which isn't great when the point of doing vite is speed. So for now I'm just not going to use the macros of lingui.
