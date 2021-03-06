import { h, render } from 'preact';
import { getUserDataAndCsrfToken } from '../chat/util';
import ArticleForm from '../article-form/articleForm';

HTMLDocument.prototype.ready = new Promise(resolve => {
  if (document.readyState !== 'loading') {
    return resolve();
  }
  document.addEventListener('DOMContentLoaded', () => resolve());
  return null;
});

document.ready.then(
  getUserDataAndCsrfToken().then(({ currentUser, csrfToken }) => {
    window.currentUser = currentUser;
    window.csrfToken = csrfToken;

    const root = document.getElementById('article-form');
    const { article, organization } = root.dataset;

    render(
      <ArticleForm article={article} organization={organization} />,
      root,
      root.firstElementChild,
    );
  }),
);
