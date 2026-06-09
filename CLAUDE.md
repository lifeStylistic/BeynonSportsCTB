# CertifiedTrackBuilder.org Build Rules

This is a paid ASBA Certified Track Builder study platform.

Do not invent facts, standards, dimensions, tolerances, page numbers, citations, or exam content.

Use the uploaded ASBA Track Manual as the primary study source.

Every study guide item, question, explanation, and citation must trace back to a source document, chapter, section, and page number when available.

If source support is missing, mark the content as "Needs Verification" and do not publish it to the live question bank.

Build in phases. Do not attempt everything at once.

Required architecture:

Frontend:

* Responsive desktop/mobile interface
* Dashboard
* Exam mode
* Study guide mode
* Missed-question review
* Flashcards
* Analytics
* Account profile
* Subscription status page

Backend:

* User authentication
* User profiles
* Role-based permissions
* Super admin portal
* Question bank database
* Study guide database
* Exam attempt tracking
* Missed-question tracking
* Adaptive study guide generation
* Stripe subscriptions

Roles:

* guest
* subscriber
* admin
* super_admin

Subscription plans:

* Monthly: $9.99/month
* Annual: $99/year

Access rules:

* Guests can view marketing pages and sample questions only.
* Subscribers can access exams, study guides, flashcards, analytics, and saved progress.
* Admins can manage questions, study content, and users.
* Super admins can control the entire site, including users, subscriptions, question bank, content, roles, and system settings.

Do not store payments directly. Use Stripe Checkout, Stripe Customer Portal, and Stripe webhooks.

Before coding each phase:

1. Review the existing files.
2. Explain the current state.
3. Identify assumptions.
4. Identify missing environment variables.
5. Propose the next implementation step.
6. Wait for approval if the change is destructive.

Never overwrite existing working code without making a backup or explaining the replacement.
