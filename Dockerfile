FROM node:20

ARG DEBIAN_FRONTEND=noninteractive

# 如果没有特别需要不要配置
ENV BING_HEADER ""

# Set home to the user's home directory
ENV HOME=/home/user \
  PATH=/home/user/.local/bin:$PATH

# Set up a new user named "user" with user ID 1000
RUN useradd -o -u 1000 user && mkdir -p $HOME/app && chown -R user $HOME

# Switch to the "user" user
USER user

# Set the working directory to the user's home directory
WORKDIR $HOME/app

# Copy the current directory contents into the container at $HOME/app setting the owner to the user
COPY --chown=user . $HOME/app/

RUN if [ ! -f ".next/routes-manifest.json" ]; then \
  npm install && npm i sharp && npm run build; \
  fi

RUN rm -rf src

ENV PORT 80

EXPOSE 80

CMD npm start
