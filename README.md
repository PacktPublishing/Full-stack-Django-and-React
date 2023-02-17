# Full Stack Django and React

<a href="https://www.packtpub.com/product/full-stack-django-and-react/9781803242972"><img src="https://static.packt-cdn.com/products/9781803242972/cover/smaller" alt="Full Stack Django and React" height="256px" align="right"></a>

This is the code repository for [Full Stack Django and React](https://www.packtpub.com/product/full-stack-django-and-react/9781803242972), published by Packt.

**Get hands-on experience in full-stack web development with Python, React, and AWS**

## What is this book about?
Django developers often need to rely on front-end developers to build client-side solution for their web apps. By combining the capabilities of React with Django, this book creates a complete learning path to go from being a backend developer to a full stack developer in no time. This book will help you use React to build state-of-the-art UI layouts and Django to create an immaculate backend.

This book covers the following exciting features:
* Explore how things work differently under the hood in the frontend as well as backend
* Discover how to build an API with Django
* Start from scratch to build an intuitive user interface using React capabilities
* Dockerize and prepare projects for deployment
* Deploy API and UI on various platforms like AWS and Vercel

If you feel this book is for you, get your [copy](https://www.amazon.com/Full-Stack-Django-React-hands/dp/1803242973/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=)

## Instructions and Navigations
All of the code is organized into folders. For example, Chapter03.

The code will look like the following:
```
from rest_framework import viewsets
from rest_framework import filters
class AbstractViewSet(viewsets.ModelViewSet):
  filter_backends = [filters.OrderingFilter]
  ordering_fields = ['updated', 'created']
  ordering = ['-updated']

```

**Following is what you need for this book:**
This book is for Django web developers who want to get started with full-stack development and learn a frontend framework that can be quickly bootstrapped with the backend to build full-stack applications. Familiarity to React and JavaScript would be an added advantage.

With the following software and hardware list you can run all code files present in the book (Chapter 1-16).

### Software and Hardware List
| Chapter | Software/Hardware required | OS required |
| -------- | ------------------------------------ | ----------------------------------- |
| 1-16 | Python | Windows, Mac OS X, and Linux |
| 1-16 | JavaScript  | Windows, Mac OS X, and Linux |
| 1-16 | PostgreSQL  | Windows, Mac OS X, and Linux |
| 1-16 | Django  | Windows, Mac OS X, and Linux |
| 1-16 | React  | Windows, Mac OS X, and Linux |
| 1-16 | Docker | Windows, Mac OS X, and Linux |

We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://packt.link/jdEHp).


### Related products
* Becoming an Enterprise Django Developer [[Packt]](https://www.packtpub.com/product/becoming-an-enterprise-django-developer/9781801073639?_ga=2.198495151.1640498229.1673976945-1676364594.1662627481) [[Amazon]](https://www.amazon.in/Becoming-Enterprise-Django-Developer-applications/dp/1801073635)

* Full Stack FastAPI, React, and MongoDB [[Packt]](https://www.packtpub.com/product/full-stack-fastapi-react-and-mongodb/9781803231822?_ga=2.187207723.2291984.1674038967-1154920067.1625494875) [[Amazon]](https://www.amazon.com/Full-Stack-FastAPI-React-MongoDB/dp/1803231823)


## Get to Know the Author

**Kolawole Mangabo** 
is a Software Engineer, currently specializing in HTML, CSS, JavaScript, and Python while regularly using React, Vue, and Django to build single-page applications and marketing landing pages in his daily routine. His goal in a team is to always build products that provide pixel-perfect, performant experiences adjusting business and user needs. When he is not coding, he spends most of his time writing and publishing articles on various websites on topics like software architecture, testing, full-stack development, and developer experience.


### Download a free PDF

 <i>If you have already purchased a print or Kindle version of this book, you can get a DRM-free PDF version at no cost.<br>Simply click on the link to claim your free PDF.</i>
<p align="center"> <a href="https://packt.link/free-ebook/9781803242972">https://packt.link/free-ebook/9781803242972 </a> </p>