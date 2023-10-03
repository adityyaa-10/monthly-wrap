## The Monthly Wrap

The Monthly Wrap is a comprehensive blogging platform, encompassing both front-end and back-end functionalities for publishing and managing content.

### Tech Stack Used

<a  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"  target="_blank"  rel="noreferrer"><img  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"  width="36"  height="36"  alt="JavaScript" /></a><a  href="https://www.python.org/"  target="_blank"  rel="noreferrer"><img  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"  width="36"  height="36"  alt="Python" /></a><a  href="https://git-scm.com/"  target="_blank"  rel="noreferrer"><img  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"  width="36"  height="36"  alt="Git" /></a><a  href="https://reactjs.org/"  target="_blank"  rel="noreferrer"><img  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"  width="36"  height="36"  alt="React" /></a><a  href="https://tailwindcss.com/"  target="_blank"  rel="noreferrer"><img  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"  width="36"  height="36"  alt="TailwindCSS" /></a><a  href="https://vitejs.dev/"  target="_blank"  rel="noreferrer"><img  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"  width="36"  height="36"  alt="Vite" /></a><a  href="https://www.djangoproject.com/"  target="_blank"  rel="noreferrer"><img  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg"  width="36"  height="36"  alt="Django" /></a>


# Monthly Wrap - Open for Open Source Contributors 🚀

**Monthly Wrap** is an open-source project. We are excited to welcome contributors from the open-source community to help us improve and grow!

## 🌟 Why Contribute?

- **Hacktoberfest Accepted:** Our repository is officially recognized as part of Hacktoberfest, making your contributions count toward the annual event.
- **Contribute to Open Source:** Join our community of open-source enthusiasts and make a positive impact.
- **Learn and Grow:** Gain valuable experience by working on real-world projects and collaborating with experienced developers.
- **Make a Difference:** Your contributions will help us enhance and expand the project for the benefit of users worldwide.

## 📌 How to Contribute

### **Check Our Issues**: Visit our [Issues Page](https://github.com/adityyaa-10/monthly-wrap/issues) to explore the list of open issues.

### Open Monthly Wrap on your localhost

Follow the steps below to run vite-react server and django backend server in your browser

1. Fork the repository.

2. Copy the URL of the Forked Repository.

3. Use these commands in your git bash to make a clone of the repository in your pc.

### SSH [Github Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

```bash
 git clone git@github.com:adityyaa-10/monthly-wrap.git
```

### GitHub CLI

```bash
 gh repo clone adityyaa-10/monthly-wrap
```

### HTTPS

```bash
 git clone https://github.com/adityyaa-10/monthly-wrap.git
```
## Run backend:

4. Change to the repository directory on your computer.

```sh
cd  monthly-wrap/server
```

5. Create a virtual environment.

```sh
python  -m  venv [name of  the  virtual  env]
```

6. Activate it.

```sh
source [name of  the  virtual  env]/bin/activate
```

7. Install the dependencies.

```sh
pip  install  -r  requirements.txt
```

8. Run migrations

```bash
python  manage.py  migrate
```

#### Note: (env) in the beginning indicates that the terminal session now operates in the activated virtual environment.

9. Run development server.

```sh
python  manage.py  runserver
```

#### Navigate to the url: http://127.0.0.1:8000/

## Run Frontend

To run the project in your localhost server, follow these steps.

1. Fork the repository. {Optional}
2. Copy the URL of the repository.

3. Move to project directory

```bash
 cd monthly-wrap/frontend/

```

4. Install dependencies

```bash
 npm install
```

5. Run deployment

```bash
 npm run dev
```

6. Open [localhost](https://localhost:5173) in any browser of your choice and you are good to go.

