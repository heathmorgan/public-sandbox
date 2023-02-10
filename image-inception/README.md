** Image Inception **

This is an example project for building an image within a container, without using --privileged
nor using a rootful container.

Use buildah to build:

    buildah build --tag image-inception:latest .

Run the container:

    podman run --user podman --interactive --tty --security-opt label=disable --security-opt unmask=ALL --device=/dev/fuse image-inception:latest bash

Once inside, you can then build the image again...

    cd public-sandbox/image-inception
    buildah build --tag image-inception:latest-er

References:
- https://www.redhat.com/sysadmin/podman-inside-container
