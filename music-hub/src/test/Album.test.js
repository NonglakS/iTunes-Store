import { render, screen } from "@testing-library/react";
import Album from "./../Components/Album";

const dummyAlbumData = {
  collectionId: 1440619217,
  artistName: "Selena Gomez & The Scene",
  collectionName: "When the Sun Goes Down",
  artworkUrl100:
    "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/79/53/35/79533511-13b3-62c3-941d-bf87e21940f8/source/100x100bb.jpg",
  releaseDate: "2011-01-01T08:00:00Z",
};

test("renders album name", () => {
  render(<Album album={dummyAlbumData} />);
  const linkElement = screen.getByText("When the Sun Goes Down");
  expect(linkElement).toBeInTheDocument();
});

test("renders year released", () => {
  render(<Album album={dummyAlbumData} />);
  const linkElement = screen.getByText("2011");
  expect(linkElement).toBeInTheDocument();
});
