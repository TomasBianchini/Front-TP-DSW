export class NotificationServiceMock {
  constructor() {}

  showSuccess(message: string): void {
    console.log('Success: ' + message);
  }

  showError(message: string): void {
    console.log('Error: ' + message);
  }
}
