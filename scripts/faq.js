function toggleFAQItem(id) {
  const content = document.getElementById(`faq-content-${id}`);
  const arrow = document.getElementById(`arrow-${id}`);
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
