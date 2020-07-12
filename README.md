Tinkering a monolith service that has is designed using event-based
architecture.

Components:
1. Objects repository - abstraction to access Objects using Repository pattern
1. Notifications service - listens to messages and builds notifications to be sent
1. Notifier service - sends messages
1. Payment service - manages payments (mocked of course)
