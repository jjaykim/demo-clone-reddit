# Demo Clone Reddit Website

This repository is a repository for recording what I learn while studying with this [tutorial](https://www.youtube.com/watch?v=O0AhmAVzOo4&ab_channel=SonnySangha).

**References**

- <u>**https://www.youtube.com/watch?v=O0AhmAVzOo4&ab_channel=SonnySangha**</u>

---

# Running

1. Create the `.env.local` file on root

```sh
cp .env.example .env.local
```

> 1. Set your **Secret Key** and **URL** for **Next Auth**
>    > _You can use your **localhost** URL_
> 2. Create your **Reddit** keys by following [the instruction](https://next-auth.js.org/providers/reddit)
> 3. Create your **Stepzen** API Key from [here](https://stepzen.com/)

2. Create the `config.yaml` file for `postgresql` configuration on [stepzen](./stepzen/)
   > _Please ping me to get the configuration for you_
