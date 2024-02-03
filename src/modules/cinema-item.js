export class CinemaItem {
  constructor(data) {
    this.id = data._id;
    this.description = data.description;
    this.image = data.image;
    this.title = data.title;
  }

  getId() {
    if ( this.id ) {
      return this.id
    }
    throw Error('НЕТУУУУУ АЙДИИИИ !!!!!!!');
  }

  getImage() {
    return this.image || '';
  }

  getDescription() {
    return this.description || '';
  }

  getTitle() {
    return this.title || '';
  }
}
