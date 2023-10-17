---
title: "How to: Kubernetes Storage with Longhorn"
date: 2023-10-01
authors:
  - steve
categories:
  - Self-Hosting
tags:
  - kubernetes
slug: longhorn-k3s
---

Let's wrangle us some Longhorn and install it on our cluster.

<!-- more -->

![type:video](https://www.youtube.com/embed/_3MPUiB7GPM)

- K3s Storage Docs: https://docs.k3s.io/storage
- Longhorn Accessing the UI: https://longhorn.io/docs/1.5.1/deploy/accessing-the-ui/

## Installing Longhorn

Source: https://docs.k3s.io/storage

K3s comes with PVC support out of the box, but we want Longhorn because it's better. It's easy to instlal - just run this:

```bash
kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/v1.5.1/deploy/longhorn.yaml
```

Then make sure all of the Longhorn pods come up without issue. Make sure they all show "Running" as their status.

```bash
kubectl get pod -n longhorn-system
```

## Accessing the Longhorn UI

Check the video for exact details on this. To access the Longhorn UI, we have to expose a NodePort for it. Run this to edit the frontend service:

```bash
kubectl edit service -n longhorn-system longhorn-frontend
```

Change the line that says `type: ClusterIP` to `type: NodePort`. Then add a `nodePort: 30080` under the only entry in the `ports:` list.

Finally, access the UI by going to your cluster's public IP on that port. For example, if you cluster is accessible on your network via the IP address 10.0.0.184, you'd visit <http://10.0.0.184:30080> in your browser to see the UI.
