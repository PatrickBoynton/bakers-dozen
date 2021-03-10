from django.test import TestCase, Client
from django.test import SimpleTestCase
from django.urls import reverse, resolve
from django.contrib.auth import get_user_model

from .views import IndexView


# Create your tests here.

# class HomepageTest(SimpleTestCase):
#     # Will execute before every test
#     #
#     def setUp(self):
#         url = reverse('frontend:home')
#         self.response = self.client.get(url)
#
#     def test_homepage_status_code(self):
#         self.assertEqual(self.response.status_code, 200)
#
#     def test_homepage_url_name(self):
#         # response = self.client.get(reverse('frontend:home'))
#         self.assertEqual(self.response.status_code, 200)
#
#     def test_homepage_url_resolves_homepageview(self):
#         view = resolve('/')
#         self.assertEqual(view.func.__name__,
#                          IndexView.as_view().__name__)
#
#         class ArticleTests(TestCase):
#             def setUp(self):
#                 user = get_user_model().objects.create(
#                     user='patrick',
#                     email='patrick@example.com',
#                     password='safepass1'
#                 )
#
#                 self.article = Article.objects.create(
#                     headline='A headline',
#                     section='LOC',
#                     author=user,
#                     submission_phase='DFT',
#                     body='Some content about the article....'
#                 )
#
#             def testing_article_content(self):
#                 article = Article.objects.get(id=1)
#
#                 self.assertEqual(f'{article.headline}', 'A headline')
#                 self.assertEqual(f'{article.section}', 'LOC')
#                 self.assertEqual(f'{article.author}', 'patrick')
#                 self.assertEqual(f'{article.submission_phase}', 'DFT')
#                 self.assertEqual(f'{article.body}', 'Some content about the article....')
#
#             def test_article_list_view(self):
#                 response = self.client.get(reverse('ap1'))
#                 self.assertEqual(response.status_code, 200)
#                 self.assertNotContains(response, 'A headline')
#
#
